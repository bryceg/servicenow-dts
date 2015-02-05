
declare module sn {
    export module Model {
        export interface IBusinessRule extends Server.IGlideRecord {
            filter_condition: String;
            abort_action: boolean;
            sys_created_on: string;
            collection: string;
            role_conditions: string;
            order: number;
            sys_updated_by: string;
            description: string;
            priority: string;
            sys_domain: string;
            when: string;
            name: string;
            advanced: boolean;
            sys_mod_count: number;
            add_message: boolean;
            template: string;
            client_callable: boolean;
            condition: string;
            action_query: boolean;
            sys_updated_on: string;
            sys_id: string;
            script: string;
            sys_created_by: string;
            message: string;
            action_update: boolean;
            sys_overrides: string;
            active: boolean;
            action_insert: boolean;
            action_delete: boolean;
        }

        export interface ITaskBase {
            active: boolean;
            activity_due: Date;
            approval: string;
            approval_set: Date;
            assigned_to: IUser_GE;
            caller_id: IUser_GE;
            child_incidents: number;
            closed_at: Date;
            closed_by: IUser_GE;
            close_notes: string;
            //cmdb_ci: IConfigurationItem_GE
            contact_type: string;
            correlation_display: string;
            correlation_id: string;
            description: string;
            due_date: Date;
            escalation: number;
            expected_start: Date;
            follow_up: Date;
            impact: number;
            knowledge: boolean;
            made_sla: boolean;
            notify: number;
            number: string;
            opened_at: Date;
            opened_by: IUser_GE;
            order: number;
            priority: number;
            reassignment_count: number;
            short_description: string;
            sla_due: number;
            state: number;
            sys_created_by: string;
            sys_created_on: Date;
            sys_id: string;
            sys_updated_by: string;
            sys_updated_on: Date;
            upon_approval: string;
            upon_reject: string;
            urgency: number;
            watch_list: IUser_GE;
            work_end: Date;
        }

        export interface IIncidentBase extends ITaskBase {
            business_stc: number;
            calendar_stc: number;
            caller_id: IUser_GE;
            category: string;
            child_incidents: number;
            close_code: string;
            incident_state: number;
            notify: number;
            reopen_count: number;
            resolved_at: Date;
            resolved_by: IUser_GE;
            severity: number;
            subcategory: string;
        }

        export interface IUserBase {
            first_name: string;
            failed_attempts: number;
            country: string;
            city: string;
            active: boolean;
            accumulated_roles: string;
            email: string;
            employee_number: string;
            gender: string;
            last_login: Date;
            last_name: string;
            middle_name: string;
            name: string;
        }

        export interface IUser_GR extends IUserBase, Server.IGlideRecord { }
        export interface IUser_GE extends IUserBase, Server.IGlideElement { }
        export interface IIncident_GR extends IUserBase, Server.IGlideRecord { }
        export interface IIncident_GE extends IUserBase, Server.IGlideElement { }
    }

    // http://wiki.servicenow.com/index.php?title=Introduction_to_Managing_Data
    // http://wiki.servicenow.com/index.php?title=Data_Dictionary_Tables
    export module TableRecord {

        // Record in the "sys_glide_object" (Field Class) table
        export interface ISysGlideObject {
            attributes: string;
            class_name: string;
            label: string;
            name: string;
            scalar_length: string;
            scalar_type: string;
            sys_created_by: string;
            sys_created_on: string;
            sys_id: string;
            sys_mod_count: string;
            sys_updated_by: string;
            sys_updated_on: string;
            use_original_value: string;
            visible: string;
        }

        // http://wiki.servicenow.com/index.php?title=Data_Dictionary_Tables#Tables
        // Record in the "sys_db_object" (Tables) table
        export interface ISysDbObject {
            create_access_controls: string;
            extension_model: string;
            is_extendable: string;
            label: string;
            live_feed_enabled: string;
            name: string;
            number_ref: string;
            super_class: string;
            sys_app_file: string;
            sys_created_by: string;
            sys_created_on: string;
            sys_id: string;
            sys_mod_count: string;
            sys_updated_by: string;
            sys_updated_on: string;
            user_role: string;
        }

        // http://wiki.servicenow.com/index.php?title=Data_Dictionary_Tables#Dictionary_Entries
        // Record in the "sys_dictionary" (Dictionary Entries) table
        export interface ISysDictionary {
            active: string;
            array: string;
            attributes: string;
            audit: string;
            calculation: string;
            choice: string;
            choice_field: string;
            choice_table: string;
            column_label: string;
            comments: string;
            create_roles: string;
            default_value: string;
            defaultsort: string;
            delete_roles: string;
            dependent: string;
            dependent_on_field: string;
            display: string;
            dynamic_creation: string;
            dynamic_creation_script: string;
            dynamic_default_value: string;
            dynamic_ref_qual: string;
            element: string;
            element_reference: string;
            foreign_database: string;
            internal_type: string;
            mandatory: string;
            max_length: string;
            name: string;
            next_element: string;
            primary: string;
            read_only: string;
            read_roles: string;
            reference: string;
            reference_cascade_rule: string;
            reference_floats: string;
            reference_key: string;
            reference_qual: string;
            reference_qual_condition: string;
            reference_type: string;
            sizeclass: string;
            spell_check: string;
            sys_class_name: string;
            sys_created_by: string;
            sys_created_on: string;
            sys_id: string;
            sys_mod_count: string;
            sys_updated_by: string;
            sys_updated_on: string;
            table_reference: string;
            text_index: string;
            unique: string;
            use_dependent_field: string;
            use_dynamic_default: string;
            use_reference_qualifier: string;
            virtual: string;
            widget: string;
            write_roles: string;
            xml_view: string;
        }
    }
}
