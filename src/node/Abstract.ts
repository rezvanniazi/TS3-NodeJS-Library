import { TeamSpeak } from "../TeamSpeak"
import { TeamSpeakQuery } from "../transport/TeamSpeakQuery"

export abstract class Abstract<T extends TeamSpeakQuery.ResponseEntry> {

  private namespace: string
  private propcache: T
  private parent: TeamSpeak

  constructor(parent: TeamSpeak, props: T, namespace: string) {
    this.namespace = namespace
    this.propcache = { ...props }
    this.parent = parent
  }

  /** retrieves the namespace of this class */
  getNameSpace() {
    return this.namespace
  }

  /** returns JSONifyable data */
  toJSON(includeNameSpace: boolean = true) {
    const res: Record<string, any> = { ...this.propcache }
    if (includeNameSpace) res._namespace = this.getNameSpace()
    return res
  }

  /**
   * retrieves a single property value by the given name
   * @param name the name from where the value should be retrieved
   */
  getPropertyByName<Y extends keyof T>(name: Y): T[Y] {
    return this.propcache[name]
  }

  /** updates the cache with the given object */
  updateCache(props: TeamSpeakQuery.ResponseEntry) {
        var changes = this.objectCopy(this.propcache, props)
        if (Object.values(changes).length === 0) return
        Object
          .values(changes)
          /**
           * Single Property Change event
           *
           * @event Abstract#update_<property>
           * @memberof Abstract
           * @type {object}
           * @property {any} from - the old value
           * @property {any} to - the new value
           */
          .forEach(prop => this.emit("update_"+prop, changes[prop]))
        /**
         * Property Change event, will retrieve all changed properties in an array
         *
         * @event Abstract#update
         * @memberof Abstract
         * @type {object[]} change
         * @property {any} change[].from - the old value
         * @property {any} change[].to - the new value
         */
        this.emit("update", changes)
    }

  /** returns the parent class */
  getParent() {
    return this.parent
  }

}
