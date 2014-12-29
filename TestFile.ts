///// <reference path="servicenowclient.d.ts" />

//declare var current: any;

//module Model {
//    export interface IIncident extends sn.Server.IGlideRecord {
//        escalation: number;
//    }
//}

//var incObj: Model.IIncident = <Model.IIncident>new GlideRecord('incident');

//incObj.get(current.task);
//if (incObj.escalation < 3) {
//    incObj.escalation += 1;
//    incObj.update();
//}


// https://{INSTANCE}/sys_glide_object_list.do
// https://{INSTANCE}/sys_glide_object.do?JSONv2
// Example showing the properties and values of the "Sys ID" record from the "sys_glide_object" (Field Class) table
//var sysId: sn.Model.TableRecord.ISysGlideObject = <sn.Model.TableRecord.ISysGlideObject>{
//    attributes: "",
//    class_name: "",
//    label: "Sys ID",
//    name: "GUID",
//    scalar_length: "32",
//    scalar_type: "string",
//    sys_created_by: "admin",
//    sys_created_on: "2012-08-10 212830",
//    sys_id: "4f04a7c1bf3320001875647fcf07396b",
//    sys_mod_count: "1",
//    sys_updated_by: "admin",
//    sys_updated_on: "2012-08-14 22016",
//    use_original_value: "true",
//    visible: "false",
//};

// https://{INSTANCE}/sys_db_object_list.do
// https://{INSTANCE}/sys_db_object.do?JSONv2
// Example showing the properties and values of the "incident" record from the "sys_db_object" (Tables) table
//var incidentTable: sn.Model.TableRecord.ISysDbObject = <sn.Model.TableRecord.ISysDbObject>{
//    create_access_controls: "false",
//    extension_model: "",
//    is_extendable: "false",
//    label: "Incident",
//    live_feed_enabled: "true",
//    name: "incident",
//    number_ref: "3",
//    super_class: "4e640051203221007f441083a8e0b32b",
//    sys_app_file: "45dc0819203221007f441083a8e0b3d9",
//    sys_created_by: "system",
//    sys_created_on: "2014-08-26 15:34:44",
//    sys_id: "85358851203221007f441083a8e0b3a0",
//    sys_mod_count: "1",
//    sys_updated_by: "system",
//    sys_updated_on: "2014-08-26 15:56:08",
//    user_role: ""
//};

// https://{INSTANCE}/sys_dictionary_list.do?sysparm_query=name%3Dincident
// https://{INSTANCE}/sys_dictionary.do?JSONv2&sysparm_query=name%3Dincident
// Example showing the properties and values of the "incident" table's "sys_id" record from the "sys_dictionary" (Dictionary Entries) table
//var incidentTableSysId: sn.Model.TableRecord.ISysDictionary = <sn.Model.TableRecord.ISysDictionary>{
//    active: "true",
//    array: "false",
//    attributes: "",
//    audit: "false",
//    calculation: "",
//    choice: "0",
//    choice_field: "",
//    choice_table: "",
//    column_label: "Sys ID",
//    comments: "",
//    create_roles: "",
//    default_value: "",
//    defaultsort: "",
//    delete_roles: "",
//    dependent: "",
//    dependent_on_field: "",
//    display: "false",
//    dynamic_creation: "false",
//    dynamic_creation_script: "",
//    dynamic_default_value: "",
//    dynamic_ref_qual: "",
//    element: "sys_id",
//    element_reference: "false",
//    foreign_database: "",
//    internal_type: "GUID",
//    mandatory: "false",
//    max_length: "32",
//    name: "incident",
//    next_element: "",
//    primary: "true",
//    read_only: "false",
//    read_roles: "",
//    reference: "",
//    reference_cascade_rule: "",
//    reference_floats: "false",
//    reference_key: "",
//    reference_qual: "",
//    reference_qual_condition: "",
//    reference_type: "",
//    sizeclass: "",
//    spell_check: "false",
//    sys_class_name: "sys_dictionary",
//    sys_created_by: "system",
//    sys_created_on: "2014-08-26 15:34:44",
//    sys_id: "d1358851203221007f441083a8e0b3a8",
//    sys_mod_count: "0",
//    sys_updated_by: "system",
//    sys_updated_on: "2014-08-26 15:34:44",
//    table_reference: "false",
//    text_index: "false",
//    unique: "false",
//    use_dependent_field: "false",
//    use_dynamic_default: "false",
//    use_reference_qualifier: "simple",
//    virtual: "false",
//    widget: "",
//    write_roles: "",
//    xml_view: "false"
//};