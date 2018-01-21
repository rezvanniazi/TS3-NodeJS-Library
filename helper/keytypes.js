module.exports = {
    //Server specific
    virtualserver_unique_identifier: String,
    virtualserver_name: String,
    virtualserver_welcomemessage: String,
    virtualserver_platform: String,
    virtualserver_version: String,
    virtualserver_maxclients: Number,
    virtualserver_password: String,
    virtualserver_clientsonline: Number,
    virtualserver_channelsonline: Number,
    virtualserver_created: Number,
    virtualserver_uptime: Number,
    virtualserver_codec_encryption_mode: Number,
    virtualserver_hostmessage: String,
    virtualserver_hostmessage_mode: Number,
    virtualserver_filebase: String,
    virtualserver_default_server_group: Number,
    virtualserver_default_channel_group: Number,
    virtualserver_flag_password: Number,
    virtualserver_default_channel_admin_group: Number,
    virtualserver_max_download_total_bandwidth: Number,
    virtualserver_max_upload_total_bandwidth: Number,
    virtualserver_hostbanner_url: String,
    virtualserver_hostbanner_gfx_url: String,
    virtualserver_hostbanner_gfx_interval: Number,
    virtualserver_complain_autoban_count: Number,
    virtualserver_complain_autoban_time: Number,
    virtualserver_complain_remove_time: Number,
    virtualserver_min_clients_in_channel_before_forced_silence: Number,
    virtualserver_priority_speaker_dimm_modificator: Number,
    virtualserver_id: Number,
    virtualserver_antiflood_points_tick_reduce: Number,
    virtualserver_antiflood_points_needed_command_block: Number,
    virtualserver_antiflood_points_needed_ip_block: Number,
    virtualserver_client_connections: Number,
    virtualserver_query_client_connections: Number,
    virtualserver_hostbutton_tooltip: String,
    virtualserver_hostbutton_url: String,
    virtualserver_hostbutton_gfx_url: String,
    virtualserver_queryclientsonline: Number,
    virtualserver_download_quota: Number,
    virtualserver_upload_quota: Number,
    virtualserver_month_bytes_downloaded: Number,
    virtualserver_month_bytes_uploaded: Number,
    virtualserver_total_bytes_downloaded: Number,
    virtualserver_total_bytes_uploaded: Number,
    virtualserver_port: Number,
    virtualserver_autostart: Number,
    virtualserver_machine_id: Number,
    virtualserver_needed_identity_security_level: Number,
    virtualserver_log_client: Number,
    virtualserver_log_query: Number,
    virtualserver_log_channel: Number,
    virtualserver_log_permissions: Number,
    virtualserver_log_server: Number,
    virtualserver_log_filetransfer: Number,
    virtualserver_min_client_version: Number,
    virtualserver_name_phonetic: String,
    virtualserver_icon_id: Number,
    virtualserver_reserved_slots: Number,
    virtualserver_total_packetloss_speech: Number,
    virtualserver_total_packetloss_keepalive: Number,
    virtualserver_total_packetloss_control: Number,
    virtualserver_total_packetloss_total: Number,
    virtualserver_total_ping: Number,
    virtualserver_ip: "ArrayOfString",
    virtualserver_weblist_enabled: Number,
    virtualserver_ask_for_privilegekey: Number,
    virtualserver_hostbanner_mode: Number,
    virtualserver_channel_temp_delete_delay_default: Number,
    virtualserver_min_android_version: Number,
    virtualserver_min_ios_version: Number,
    virtualserver_status: String,

    //Data Transfer
    connection_filetransfer_bandwidth_sent: Number,
    connection_filetransfer_bandwidth_received: Number,
    connection_filetransfer_bytes_sent_total: Number,
    connection_filetransfer_bytes_received_total: Number,
    connection_packets_sent_speech: Number,
    connection_bytes_sent_speech: Number,
    connection_packets_received_speech: Number,
    connection_bytes_received_speech: Number,
    connection_packets_sent_keepalive: Number,
    connection_bytes_sent_keepalive: Number,
    connection_packets_received_keepalive: Number,
    connection_bytes_received_keepalive: Number,
    connection_packets_sent_control: Number,
    connection_bytes_sent_control: Number,
    connection_packets_received_control: Number,
    connection_bytes_received_control: Number,
    connection_packets_sent_total: Number,
    connection_bytes_sent_total: Number,
    connection_packets_received_total: Number,
    connection_bytes_received_total: Number,
    connection_bandwidth_sent_last_second_total: Number,
    connection_bandwidth_sent_last_minute_total: Number,
    connection_bandwidth_received_last_second_total: Number,
    connection_bandwidth_received_last_minute_total: Number,

    //Client specific
    clid: Number,
    cldbid: Number,
    client_database_id: Number,
    client_nickname: String,
    client_type: Number,
    client_away: Number,
    client_away_message: String,
    client_flag_talking: Number,
    client_input_muted: Number,
    client_output_muted: Number,
    client_input_hardware: Number,
    client_output_hardware: Number,
    client_talk_power: Number,
    client_is_talker: Number,
    client_is_priority_speaker: Number,
    client_is_recording: Number,
    client_is_channel_commander: Number,
    client_unique_identifier: String,
    client_servergroups: "ArrayOfInt",
    client_channel_group_id: Number,
    client_channel_group_inherited_channel_id: Number,
    client_version: String,
    client_platform: String,
    client_idle_time: Number,
    client_created: Number,
    client_lastconnected: Number,
    client_icon_id: Number,
    client_country: String,
    client_outputonly_muted: Number,
    client_default_channel: String,
    client_meta_data: String,
    client_version_sign: String,
    client_security_hash: String,
    client_login_name: String,
    client_totalconnections: Number,
    client_flag_avatar: String,
    client_talk_request: Number,
    client_talk_request_msg: String,
    client_month_bytes_uploaded: Number,
    client_month_bytes_downloaded: Number,
    client_total_bytes_uploaded: Number,
    client_total_bytes_downloaded: Number,
    client_nickname_phonetic: String,
    client_default_token: String,
    client_badges: String,
    client_base64HashClientUID: String,
    connection_connected_time: Number,
    connection_client_ip: String,


    //Channel specific
    cid: Number,
    pid: Number,
    channel_order: Number,
    channel_name: String,
    channel_password: String,
    channel_description: String,
    channel_topic: String,
    channel_flag_default: Number,
    channel_flag_password: Number,
    channel_flag_permanent: Number,
    channel_flag_semi_permanent: Number,
    channel_codec: Number,
    channel_codec_quality: Number,
    channel_needed_talk_power: Number,
    channel_icon_id: Number,
    total_clients_family: Number,
    channel_maxclients: Number,
    channel_maxfamilyclients: Number,
    total_clients: Number,
    channel_needed_subscribe_power: Number,
    channel_codec_latency_factor: Number,
    channel_codec_is_unencrypted: Number,
    channel_security_salt: String,
    channel_delete_delay: Number,
    channel_flag_maxclients_unlimited: Number,
    channel_flag_maxfamilyclients_unlimited: Number,
    channel_flag_maxfamilyclients_inherited: Number,
    channel_filepath: String,
    channel_forced_silence: Number,
    channel_name_phonetic: String,
    channel_flag_private: Number,
    seconds_empty: Number,

    //Group Specific
    cgid: Number,
    sgid: Number,

    //Permission Specific
    permid: Number,
    permvalue: Number,
    permnegated: Number, 
    permskip: Number,
    permsid: String,

    //Events
    reasonid: Number,
    reasonmsg: String,
    ctid: Number,
    cfid: Number,
    targetmode: Number,
    msg: String,
    target: Number,
    invokerid: Number,
    invokername: String,
    invokeruid: String,

    //Snapshot
    hash: String,

    //Logs
    last_pos: Number,
    file_size: Number,
    l: String,

    //FileTransfer
    size: Number,
    clientftfid: Number,
    serverftfid: Number,
    ftkey: String,
    port: Number,
    proto: Number,

    //General
    name: String,

    //Reponse Error
    id: Number,
    msg: String,
    extra_msg: String

}
