declare var gs: sn.Server.GlideSystemStatic;
declare var GlideRecord: sn.Server.IGlideRecord;
declare var GlideDateTime: sn.Server.IGlideDateTime;
declare var GlideTime: sn.Server.IGlideTime;
declare var GlideDuration: sn.Server.IGlideDuration;


declare module sn {
    export interface IArrayList {
        size(): number;
        get(i: number): any;
    }

    export module Server {
        // http://wiki.servicenow.com/index.php?title=GlideSystemStatic
        export interface GlideSystemStatic {
            ///////////////////////////////////////
            // General
            ///////////////////////////////////////

            eventQueue(eventName: string, gr: IGlideRecord, optionalParam1: string, optionalParam2: string, eventQueue: string): void;
            getDisplayColumn(table: string): string;
            getDisplayValueFor(table: string, sysid: string, field: string): string;
            getEscapedProperty(property: string, altObject: any): any; // returns string unless property not found, then returns defaultReturnObject
            getMessage(id: string, messageFormat?: string): string;
            getMessageS(id: string, messageFormat?: string): string;
            getNodeValue(object: any, index: number): any;
            getNodeName(object: any, index: number): any;
            getProperty(key: string, altObject: any): any; // returns string unless property not found, then returns defaultReturnObject
            getScriptError(script: string): string;
            getStyle(table: string, field: string, value: string): string;
            getXMLText(xml: string, xpath: string): string;
            getXMLNodeList(xml: string): any;
            log(message: string, source: string): void;
            logError(message: string, source: string): void;
            logWarning(message: string, source: string): void;
            nil(object: any): boolean;
            print(message: string): void;
            tableExists(table: string): boolean;
            workflowFlush(gr: IGlideRecord): void;

            ///////////////////////////////////////
            // Date and Time Functions
            ///////////////////////////////////////
            
            // All DateTime returned as strings: yyyy-mm-dd hh:mm:ss except where specified

            beginningOfLastMonth(): string;
            beginningOfLastWeek(): string;
            beginningOfNextWeek(): string;
            beginningOfNextMonth(): string;
            beginningOfNextYear(): string;
            beginningOfThisMonth(): string;
            beginningOfThisQuarter(): string;
            beginningOfThisWeek(): string;
            beginningOfThisYear(): string;
            beginningOfToday(): string;
            beginningOfYesterday(): string;
            dateDiff(date1: string, date2: string, returnSeconds: boolean): any;
            dateGenerate(date: string, time: string): string;
            daysAgo(num: number): string;
            daysAgoEnd(num: number): string;
            daysAgoStart(num: number): string;
            endOfLastMonth(): string;
            endOfLastWeek(): string;
            endOfLastYear(): string;
            endOfNextMonth(): string;
            endOfNextWeek(): string;
            endOfNextYear(): string;
            endOfThisMonth(): string;
            endOfThisQuarter(): string;
            endOfThisWeek(): string;
            endOfThisYear(): string;
            endOfToday(): string;
            endOfYesterday(): string;
            hoursAgo(num: number): string;
            hoursAgoEnd(num: number): string;
            hoursAgoStart(num: number): string;
            lastWeek(): string;
            minutesAgo(num: number): string;
            minutesAgoEnd(num: number): string;
            minutesAgoStart(num: number): string;
            monthsAgo(num: number): string;
            monthsAgoEnd(num: number): string;
            monthsAgoStart(num: number): string;
            now(): string;
            nowNoTZ(): string;
            nowDateTime(): string;
            quartersAgo(num: number): string;
            quartersAgoEnd(num: number): string;
            quartersAgoStart(num: number): string;
            yearsAgo(num: number): string;
            yesterday(): string;
            isFirstDayOfMonth(d: Date): boolean;
            isFirstDayOfWeek(d: Date): boolean;
            isFirstDayOfYear(d: Date): boolean;
            isLastDayOfMonth(d: Date): boolean;
            isLastDayOfWeek(d: Date): boolean;	
            isLastDayOfYear(d: Date): boolean;	

            ///////////////////////////////////////
            //        User Session Functions
            ///////////////////////////////////////
            addErrorMessage(message: string): void;
            addInfoMessage(message: string): void;
            addMessage(typeOrMessage: string, message?: string): void;
            clearClientData(key: string): void;
            flushMessages(): void;
            getClientData(key: string): string;
            getErrorMessages(): string;
            getImpersonatingUserDisplayName(): string;
            getImpersonatingUserName(): string;
            getInfoMessages(): string;
            getMessages(type: string): string;
            getPreference(key: string, obj: any): string;
            getRoles(): string;
            getSession(): string;
            getSessionID(): string;
            getTrivialMessages(): string;
            getUser(): any; // todo: define the User object interface
            getUserDisplayName(): string;
            getUserID(): string;
            getUserName(): string;
            getUserNameByUserID(id: string): string;
            hasRole(roleName: string): boolean;
            hasRoleInGroup(roleName: string, glideRecordOrSysId: any): boolean;
            isInteractive(): boolean;
            isLoggedIn(): boolean;
            putClientData(key: string, value: string): void;
            setRedirect(uri: string): void; 
            setReturn(uri: string): void;
            userID(): string;
        }

        // http://wiki.servicenow.com/index.php?title=GlideRecord
        export interface IGlideRecord {
            new (type: string): IGlideRecord;

            ///////////////////////////////////////
            // Query Method Summary
            ///////////////////////////////////////

            addActiveQuery(): IQueryCondition;
            addDomainQuery(obj: IGlideRecord): void;
            addEncodedQuery(query: string): void;
            addInactiveQuery(): IQueryCondition;
            addJoinQuery(joinTable: string, primaryField?: string, joinTableField?: string): IQueryCondition;
            addNotNullQuery(fieldName: string): IQueryCondition;
            addNullQuery(fieldName: string): IQueryCondition;
            addQuery(encodedQuery: string): IQueryCondition;
            addQuery(fieldName: string, value: string): IQueryCondition;
            addQuery(fieldName: string, operator: string, value: string): IQueryCondition;
            canCreate(): boolean;
            canDelete(): boolean;
            canRead(): boolean;
            canWrite(): boolean;
            changes(): boolean;
            find(columnName: string, value: string): boolean;
            hasAttachments(): boolean;
            hasNext(): boolean;
            instanceOf(className: string): boolean;
            isNewRecord(): boolean;
            isValid(): boolean;
            isValidField(columnName: string): boolean;
            isValidRecord(): boolean;
            next(): boolean;
            _next(): boolean;
            orderBy(name: string): void;
            orderByDesc(name: string): void;
            query(): void;
            query(query: string): void;
            query(field: string, value: string): void;
            queryNoDomain(): void;
            queryNoDomain(query: string): void;
            queryNoDomain(field: string, value: string): void;
            _query(): void;
            _query(query: string): void;
            _query(field: string, value: string): void;
            restoreLocation(): void;
            saveLocation(): void;

            ///////////////////////////////////////
            // Get Method Summary
            ///////////////////////////////////////

            get(name: string, value?: string): boolean;
            getAttribute(attribute: string): string;
            getClassDisplayValue(): string;
            getDisplayValue(): string;
            getED(): IElementDescriptor;
            getElement(columnName: string): IGlideElement;
            getEncodedQuery(): string;
            getEscapedDisplayValue(): string;
            getFields(): sn.IArrayList;
            getLabel(): string;
            getLink(noStack: boolean): string;
            getLocation(): number;
            getPlural(): string;
            getRecordClassName(): string;
            getRelatedLists(): {[name: string]: any};
            getRelatedTables(): {[name: string]: any};
            getRowCount(): number;
            getRowNumber(): number;
            getTableName(): string;
            getValue(name: string): string;

            ///////////////////////////////////////
            // Set Method Summary
            ///////////////////////////////////////

            autoSysFields(e: boolean): void;
            setAbortAction(b: boolean): void;
            setDisplayValue(name: string, value: string): void;
            setForceUpdate(e: boolean): void;
            setLimit(limit: number): void;
            setLocation(num: number): void;
            setNewGuid(): void;
            setNewGuidValue(guid: string): void;
            setQueryReferences(queryReferences: boolean): void;
            setUseEngines(e: boolean): void;
            setValue(name: string, value: any): void;
            setWorkflow(e: boolean): void;

            ///////////////////////////////////////
            // Update Method Summary
            ///////////////////////////////////////
            applyTemplate(template: string): void;
            update(reason?: string): string;
            updateWithReferences(reason?: string): string;

            ///////////////////////////////////////
            // Insert Method Summary
            ///////////////////////////////////////

            initialize(): void;
            insert(): string;
            insertWithReferences(): string;
            newRecord(): void;

            ///////////////////////////////////////
            // Delete Method Summary
            ///////////////////////////////////////

            deleteMultiple(): void;
            deleteRecord(): boolean;
        }

        export interface IQueryCondition {
            addOrCondition(encodedQuery: string): IQueryCondition;
            addOrCondition(fieldName: string, value: string): IQueryCondition;
            addOrCondition(fieldName: string, operator: string, value: string): IQueryCondition;
        }

        export interface IGlideDateTime {
            ///////////////////////////////////////
            // Constructors
            ///////////////////////////////////////
            new (): IGlideDateTime;
            new (initialValue: string): IGlideDateTime;
            new (initialValue: IGlideDateTime): IGlideDateTime; // initial value can be a string or a GlideDateTime object

            hasDate(): boolean;
            getUserTimeZone(): any; // todo: define TimeZoneObject
            setTZ(tz: any): void; // todo: tz is a TimeZoneObject
            setValue(dateTime: string): void;
            setValueUTC(dt: string, format: string): void;
            setGlideDateTime(gdt: IGlideDateTime): void;
            isDST(): boolean;
            getDSTOffset(): number;
            setDisplayValue(asDisplayed: string): void;
            setDisplayValueInternal(value: string): void;
            setDisplayValueInternalWithAlternates(value: string): void;
            setDisplayValue(value: string, format: string): void;
            getDisplayValue(): string;
            getDisplayValueInternal(): string;
            getValue(): string;
            compareTo(gDt: IGlideDateTime): boolean;
            getDayOfWeekLocalTime(): number; // 1-7 => Monday - Sunday
            getDayOfWeekUTC(): number; // 1-7 => Monday - Sunday
            getWeekOfYearLocalTime(): number;
            getWeekOfYearUTC(): number;
            getSpanTime(dayOfWeek: number): IGlideDateTime;
            getDayOfMonth(): number;
            getDayOfMonthLocalTime(): number;
            getDayOfMonthUTC(): number;
            setDayOfMonth(day: number): void;
            setDayOfMonthLocalTime(day: number): void;
            setDayOfMonthUTC(day: number): void;
            getDaysInMonth(): number;
            getDaysInMonthLocalTime(): number;
            getDaysInMonthUTC(): number;
            getMonthLocalTime(): number;
            getMonthUTC(): number;
            getYearLocalTime(): number;
            getYearUTC(): number;
            getNumericValue(): number; // gets the datetime to milliseconds from unix epoch
            setNumericValue(milliseconds: number): void; // sets the datetime to milliseconds from unix epoch
            getTime(): number;
            getInternalMidnight(num: number): IGlideDateTime;
            getUTCMidnight(num: number): IGlideDateTime;
            getLocalTime(): IGlideDateTime;
            getDate(): IGlideDateTime;
            getLocalDate(): IGlideDateTime;
            toString(): string;
            add(glideTime: IGlideTime): void;
            addDaysLocalTime(days: number): void;
            addDaysUTC(days: number): void;
            addWeeksLocalTime(weeks: number): void;
            addWeeksUTC(weeks: number): void;
            addMonthsLocalTime(month: number): void;
            addMonthsUTC(month: number): void;
            addYearsLocalTime(years: number): void;
            addYearsUTC(years: number): void;
            subtract(time: IGlideTime): void;
            subtract(start: IGlideDateTime, end: IGlideDateTime): IGlideDuration;
            isValid(): boolean;
            getErrorMsg(): string;
            add(ms: number): void;
            addSeconds(seconds: number): void;
            subtract(ms: number): void;
            getTZOffset(): number;
            setInitialValue(dt: string): void;
            equals(obj: IGlideDateTime): boolean;
            setMonthLocalTime(month: number): void;
            setMonthUTC(month: number): void;
            setYearLocalTime(year: number): void;
            setYearUTC(year: number): void;
        }

        export interface IGlideTime {
        }
        export interface IGlideDuration {
        }
        export interface IElementDescriptor {
        }
        export interface IGlideElement {
        }
    }
} 