declare var gs: sn.Server.IGlideSystem;
declare var GlideAggregate: sn.Server.IGlideAggregate;
declare var GlideAjax: sn.Server.IGlideAjax;
declare var GlideDate: sn.Server.IGlideDate;
declare var GlideDateTime: sn.Server.IGlideDateTime;
declare var GlideDuration: sn.Server.IGlideDuration;
declare var GlideElement: sn.Server.IGlideElement;
declare var GlideEmailOutbound: sn.Server.IGlideEmailOutbound;
declare var GlideFilter: sn.Server.IGlideFilter;
declare var GlideGuid: sn.Server.IGlideGuid;
declare var GlideLocale: sn.Server.IGlideLocale;
declare var GlidePluginManager: sn.Server.IGlidePluginManager;
declare var GlideRecord: sn.Server.IGlideServerRecord;
declare var GlideRecordSecure: sn.Server.IGlideServerRecord;
declare var GlideSchedule: sn.Server.IGlideSchedule;
declare var GlideScopedEvaluator: sn.Server.IGlideScopedEvaluator;
declare var GlideSysAttachment: sn.Server.IGlideSysAttachment;
declare var GlideTableHierarchy: sn.Server.IGlideTableHierarchy;
declare var GlideTime: sn.Server.IGlideTime;
declare var ScopedGlideURI: sn.Server.IGlideURI;
declare var wizard: sn.Server.IGlideServerRecord;

// Script Includes

declare var XMLDocument2: sn.Server.IXMLDocument2;
declare var global: sn.Server.IGlobalScope;
declare var sn_ws: sn.Server.ISN_WS;
declare var Class: sn.Server.IClass;
declare var RP: sn.Server.IRP;

declare namespace sn {
    namespace Server {

        // Glide API

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideAggregate_API_Reference
        // http://wiki.servicenow.com/index.php?title=GlideAggregate
        export interface IGlideAggregate extends IGlideServerRecord {
            new (tableName: string): IGlideAggregate;
            addAggregate(agg: string, name?: string): void;
            addEncodedQuery(query: string): void;
            getAggregate(agg: string, name?: string): string;
            getAggregateEncodedQuery(): void;
            groupBy(name: string): void;
            orderByAggregate(name: string): void;
            setGroup(b: boolean): void;
        }

        // http://wiki.servicenow.com/index.php?title=GlideAjax
        export interface IGlideAjax {
            getParameter(name: string): string;
            getParameterNames(): Array<string>;
            getParameterValues(): Array<string>;
            newItem(name: string): IGlideAjaxXml;

            addParam(name: string, value: string): void;
        }

        export interface IGlideAjaxXml {
            setAttribute(name: string, value: string): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideDate_API_Reference
        export interface IGlideDate {
            new (): IGlideDate;
            getByFormat(format: string): string;
            getDisplayValue(): string;
            getDisplayValueInternal(): string;
            getValue(): string;
            setDisplayValue(asDisplayed: string): void;
            setValue(o: string): void;
            subtract(start: IGlideDate, end: IGlideDate): IGlideDuration;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideDateTime_API_Reference
        // http://wiki.servicenow.com/index.php?title=GlideDateTime
        export interface IGlideDateTime {
            ///////////////////////////////////////
            // Constructors
            ///////////////////////////////////////
            new (): IGlideDateTime;
            new (value: string): IGlideDateTime;
            new (g: IGlideDateTime): IGlideDateTime;

            hasDate(): boolean;
            setValue(o: string): void;
            setValueUTC(dt: string, format: string): void;
            setGlideDateTime(g: IGlideDateTime): void;
            isDST(): boolean;
            getDSTOffset(): number;
            setDisplayValue(asDisplayed: string): void;
            setDisplayValueInternal(value: string): void;
            setDisplayValue(value: string, format: string): void;
            getDisplayValue(): string;
            getDisplayValueInternal(): string;
            getValue(): string;
            compareTo(o: Object): number;
            getDayOfWeekLocalTime(): number;
            getDayOfWeekUTC(): number;
            getWeekOfYearLocalTime(): number;
            getWeekOfYearUTC(): number;
            getDayOfMonthLocalTime(): number;
            dateDayOfMonthUTC(): number;
            setDayOfMonthLocalTime(day: number): void;
            setDayOfMonthUTC(day: number): void;
            getDaysInMonthUTC(): number;
            getMonthLocalTime(): number;
            getMonthUTC(): number;
            getYearLocalTime(): number;
            getYearUTC(): number;
            getNumericValue(): number;
            getTime(): IGlideTime;
            getLocalTime(): IGlideTime;
            getDate(): IGlideTime;
            getLocalDate(): IGlideTime;
            toString(): string;
            add(gd: IGlideTime): void;
            addDaysLocalTime(amount: number): void;
            addDaysUTC(amount: number): void;
            addWeeksLocalTime(amount: number): void;
            addWeeksUTC(amount: number): void;
            addMonthsLocalTime(amount: number): void;
            addMonthsUTC(amount: number): void;
            addYearsLocalTime(amount: number): void;
            addYearsUTC(amount: number): void;
            subtract(gd: IGlideTime): void;
            subtract(start: IGlideDateTime, end: IGlideDateTime): IGlideDuration;
            subtract(value: number): void;
            isValid(): boolean;
            getErrorMsg(): string;
            add(value: number): void;
            addSeconds(value: number): void;
            getTZOffset(): number;
            equals(o: Object): boolean;
            setMonthLocalTime(month: number): void;
            setMonthUTC(month: number): void;
            setYearLocalTime(year: number): void;
            setYearUTC(year: number): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideDuration_API_Reference
        export interface IGlideDuration {
            new (): IGlideDuration;
            new (another: IGlideDuration): IGlideDuration;
            new (ms: number): IGlideDuration;
            new (displayValue: string): IGlideDuration;
            add(value: IGlideDuration): IGlideDuration;
            getByFormat(format: string): string;
            getDayPart(): number;
            getRoundedDayPart(): number;
            getDisplayValue(): string;
            getDurationValue(): string;
            getValue(): string;
            setDisplayValue(asDisplayed: string): void;
            setValue(o: Object): void;
            subtract(value: IGlideDuration): IGlideDuration;
            getNumericValue(): number;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideElement_API_Reference
        // http://wiki.servicenow.com/index.php?title=GlideElement
        export interface IGlideElement {
            changes(): boolean;
            changesFrom(value: Object): boolean;
            changesTo(value: Object): boolean;
            getChoices(name: string): Array<any>;
            getDecryptedValue(): string;
            getDisplayValue(maxCharacters?: number): string;
            getReferenceTable(): string;
            getRefRecord(): IGlideServerRecord;
            nil(): boolean;
            setDisplayValue(value: Object): void;
            setError(value: string): void;
            setValue(value: Object): void;
            toString(): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideEmailOutbound_API_Reference
        export interface IGlideEmailOutbound {
            getSubject(): string;
            setSubject(subject: string): void;
            setFrom(address: string): void;
            setReplyTo(address: string): void;
            addAddress(type: string, address: string, displayName: string);
            setBody(bodyText: string): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideFilter_API_Reference
        export interface IGlideFilter {
            checkRecord(gr: IGlideServerRecord, filter: string, matchAll?: Object): boolean;
        }

        export interface IGlideGuid {
            generate(): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideLocale_API_Reference
        export interface IGlideLocale {
            get(): IGlideLocale;
            getGroupingSeparator(): string;
            getDecimalSeparator(): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlidePluginManager_API_Reference
        export interface IGlidePluginManager {
            isActive(pluginId: string): boolean;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideQueryCondition_API_Reference
        export interface IGlideQueryCondition {
            addCondition(name: string, value: Object): IGlideQueryCondition;
            addCondition(name: string, oper: string, value: Object): IGlideQueryCondition;
            addOrCondition(name: string, oper: string, value: Object): IGlideQueryCondition;
            addOrCondition(name: string, value: Object): IGlideQueryCondition;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideSchedule_API_Reference
        export interface IGlideSchedule {
            new (): IGlideSchedule;
            new (sysId: string, timeZone: string): IGlideSchedule;
            add(startDate: IGlideDateTime, offset: IGlideDuration): IGlideDateTime;
            duration(startDate: IGlideDateTime, endDate: IGlideDateTime): IGlideDuration;
            isInSchedule(time: IGlideDateTime): string;
            isValid(): boolean;
            getName(): string;
            load(sysId: string, timeZone: string, excludeSpanId: string): void;
            whenNext(time: IGlideDateTime, timeZone: string): number;
            setTimeZone(tz: string): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideScopedEvaluator_API_Reference
        export interface IGlideScopedEvaluator {
            new (): IGlideScopedEvaluator;
            evaluateScript(grObj: IGlideServerRecord, scriptField: string, variables: Object): Object;
            getVariable(name: string): Object;
            putVariable(name: string, value: Object): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideScriptedProcessor_API_Reference
        export interface IGlideScriptedProcessor {
            redirect(url: string): void;
            writeOutput(s: string): void;
            writeOutput(contentType: string, s: string): void;
            writeJSON(o: Object): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideRecord_API_Reference
        // http://wiki.servicenow.com/index.php?title=GlideRecord
        export interface IGlideServerRecord {
            new (type: string): IGlideServerRecord;

            ///////////////////////////////////////
            // Query Method Summary
            ///////////////////////////////////////

            addEncodedQuery(query: string): void;
            addJoinQuery(joinTable: string, primaryField?: string, joinTableField?: string): IGlideQueryCondition;
            addNotNullQuery(fieldName: string): IGlideQueryCondition;
            addNullQuery(fieldName: string): IGlideQueryCondition;
            addQuery(encodedQuery: string): IGlideQueryCondition;
            addQuery(fieldName: string, value: Object): IGlideQueryCondition;
            addQuery(fieldName: string, operator: string, value: Object): IGlideQueryCondition;
            canCreate(): boolean;
            canDelete(): boolean;
            canRead(): boolean;
            canWrite(): boolean;
            chooseWindow(f: number, l: number, forceCount?: boolean): void;
            hasNext(): boolean;
            isActionAborted(): boolean;
            isNewRecord(): boolean;
            isValid(): boolean;
            isValidField(columnName: string): boolean;
            isValidRecord(): boolean;
            next(): boolean;
            orderBy(name: string): void;
            orderByDesc(name: string): void;
            query(): void;
            query(query: string): void;
            query(field: string, value: string): void;

            ///////////////////////////////////////
            // Get Method Summary
            ///////////////////////////////////////
            get(name: string, value?: string): boolean;
            getDisplayValue(): string;
            getElement(columnName: string): IGlideElement;
            getEncodedQuery(): string;
            getLastErrorMessage(): string;
            getLink(noStack: boolean): string;
            getRecordClassName(): string;
            getRowCount(): number;
            getTableName(): string;
            getUniqueValue(): string;
            getValue(name: string): string;

            ///////////////////////////////////////
            // Set Method Summary
            ///////////////////////////////////////

            setAbortAction(b: boolean): void;
            setLimit(limit: number): void;
            setNewGuidValue(guid: string): void;
            setValue(name: string, value: any): void;
            setWorkflow(e: boolean): void;

            ///////////////////////////////////////
            // Update Method Summary
            ///////////////////////////////////////
            update(reason?: string): string;
            updateMultiple(): void;

            ///////////////////////////////////////
            // Insert Method Summary
            ///////////////////////////////////////

            initialize(): void;
            insert(): string;
            newRecord(): void;

            ///////////////////////////////////////
            // Delete Method Summary
            ///////////////////////////////////////

            deleteMultiple(): void;
            deleteRecord(): boolean;

            ///////////////////////////////////////
            // Default Fields Summary
            ///////////////////////////////////////
            sys_id: string;
            sys_created_on: sn.Server.IGlideDateTime;
            sys_created_by: string;
            sys_updated_on: sn.Server.IGlideDateTime;
            sys_updated_by: string;
            sys_mod_count: number;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideServletRequest_API_Reference
        export interface IGlideServletRequest {
            getContentType(): string;
            getHeader(name: string): string;
            getParameter(name: string): string;
            writeOutput(mimeType: string, output: string): void;
            toString(): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideServletResponse_API_Reference
        export interface IGlideServletResponse {
            setContentType(type: string): void;
            setHeader(name: string, value: string): void;
            setStatus(value: number): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideSession_API_Reference
        export interface IGlideSession {
            isInteractive(): boolean;
            isLoggedIn(): boolean;
            getClientData(paramName: string): string;
            getClientIP(): string;
            getCurrentApplicationId(): string;
            getLanguage(): string;
            getTimeZoneName(): string;
            getSessionToken(): string;
            getUrlOnStack(): string;
            putClientData(paramName: string, paramValue: string): void;
        }

        export interface IGlideStringUtil {
            base64Decode(value: string): string;
            base64DecodeAsBytes(value: string): any;
            escapeHTML(value: string): string;
            getStringFromStream(stream: Object): string;
        }

        export interface IGlideSysAttachment {
            new (): IGlideSysAttachment;
            getContent(record: IGlideServerRecord): any;
            copy(sourceTable: string, sourceSysId: string, destinationTable: string, destinationSysId: string): void;
            write(record: IGlideServerRecord, fileName: string, contentType: string, data: any): void;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideSystem_API_Reference
        // http://wiki.servicenow.com/index.php?title=GlideSystem
        export interface IGlideSystem {
            ///////////////////////////////////////
            // General
            ///////////////////////////////////////

            eventQueue(eventName: string, gr: IGlideServerRecord, optionalParam1: string, optionalParam2: string, eventQueue?: string): void;
            getMessage(id: string, messageFormat?: string): string;
            getMessageS(id: string, object?: any): string;
            getProperty<T>(key: string, altObject?: T): T;
            include(include: string): void;
            nil(object: any): boolean;
            tableExists(table: string): boolean;
            generateGUID(): string;
            getCssCacheVersionString(): string;
            getCurrentApplicationId(): string;
            getCurrentScopeName(): string;
            getCallerScopeName(): string;

            ///////////////////////////////////////
            // Scoped Script Logging
            ///////////////////////////////////////

            debug(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
            error(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
            info(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
            warn(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
            isDebugging(): boolean;

            ///////////////////////////////////////
            // Date and Time Functions
            ///////////////////////////////////////

            ///////////////////////////////////////
            //        User Session Functions
            ///////////////////////////////////////
            addErrorMessage(message: string): void;
            addInfoMessage(message: string): void;
            getSession(): string | IGlideSession;
            getSessionID(): string;
            getTimeZoneName(): string;
            getUrlOnStack(): string;
            getUser(): IGlideUser;
            getUserDisplayName(): string;
            getUserID(): string;
            getUserName(): string;
            getUserNameByUserID(id: string): string;
            hasRole(roleName: string): boolean;
            isInteractive(): boolean;
            isLoggedIn(): boolean;
            setRedirect(uri: string): void;

            /////////////////////////////////////
            //  Base 64 functions
            /////////////////////////////////////
            base64Encode(encode: any): string;
            base64Decode(decode: string): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideTableHierarchy_API_Reference
        export interface IGlideTableHierarchy {
            new (tableName: string): IGlideTableHierarchy;
            getAllExtensions(): Array<string>;
            getBase(): string;
            getHierarchy(): Array<string>;
            getName(): string;
            getRoot(): string;
            getTableExtensions(): Array<string>;
            getTables(): Array<string>;
            hasExtensions(): boolean;
            isBaseClass(): boolean;
            isSoloClass(): boolean;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideTime_API_Reference
        export interface IGlideTime {
            new (milliseconds: number): IGlideTime;
            getByFormat(format: string): string;
            getDisplayValue(): string;
            getDisplayValueinternal(): string;
            getValue(): string;
            setDisplayValue(asDisplayed: string): void;
            setValue(o: string): void;
            subtract(start: IGlideTime, end: IGlideTime): IGlideDuration;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideURI_API_Reference
        export interface IGlideURI {
            get(name: string): string;
            set(name: string, value: string): void;
            toString(path: string): string;
            getFileFromPath(): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_GlideUser_API_Reference
        export interface IGlideUser {
            getCompanyID(): string;
            getDisplayName(): string;
            getID(): string;
            getName(): string;
            getPreference(name: string): string;
            hasRole(role: string): boolean;
            isMemberOf(group: string): boolean;
            savePreference(name: string, value: string): void;
        }

        // Script Includes

        // http://wiki.servicenow.com/index.php?title=ArrayUtil
        export interface IArrayUtil {
            new (): IArrayUtil;
            contains<T>(array: Array<T>, element: T): number;
            indexOf<T>(array: Array<T>, element: T, startIndex?: number): number;
            ensureArray(obj: Object): Array<Object>;
            concat(parent: Array<Object>, child: Array<Object>): Array<Object>;
            convertArray(a: Object): Array<Object>;
            diff(a: Array<Object>, b: Array<Object>, c?: Array<Object>, d?: Array<Object>): Array<Object>;
            intersect(a: Array<Object>, b: Array<Object>, c?: Array<Object>, d?: Array<Object>): Array<Object>;
            union(a: Array<Object>, b: Array<Object>, c?: Array<Object>, d?: Array<Object>): Array<Object>;
            unique(a1: Array<Object>): Array<Object>;
        }

        // http://wiki.servicenow.com/index.php?title=CIUtils
        export interface ICIUtils {
            new (): ICIUtils;
            servicesAffectedByCI(id: string): Array<string>;
            servicesAffectedByTask(record: IGlideServerRecord): Array<string>;
        }

        export interface IClass {
            create(): any;
        }

        export interface IGlobalScope {
            JSValidator: sn.Server.IJSValidator;
            TableUtils: sn.Server.ITableUtils;
            ArrayUtil: sn.Server.IArrayUtil;
            CIUtils: sn.Server.ICIUtils;
            GSLog: sn.Server.IGSLog;
            Class: sn.Server.IClass;
            AbstractAjaxProcessor: sn.Server.IGlideAjax;
            GlideStringUtil: sn.Server.IGlideStringUtil;
            JSON: sn.Server.IJSON;
            JSUtil: sn.Server.IJSUtil;
        }

        // http://wiki.servicenow.com/index.php?title=GSLog
        export interface IGSLog {
            new (traceProperty: string, caller: string): IGSLog;
            initialize(traceProperty: string, caller: string): void;
            logDebug(msg: string);
            logInfo(msg: string);
            logNotice(msg: string);
            logWarning(msg: string);
            logErr(msg: string);
            logCrit(msg: string);
            logAlert(msg: string);
            logEmerg(msg: string);
            log(level: string, msg: string);
            setLevel(level: string);
            getLevel(level: string);
            debugOn(): boolean;
        }

        export interface IJSON {
            new (): IJSON;
            encode(obj: any): string;
            decode<T>(jsonStr: string): T;
            parse<T>(jsonStr: string): T;
            stringify(obj: any): string;
            parse<T>(json: string): T;
        }

        // http://wiki.servicenow.com/index.php?title=JSUtil
        export interface IJSUtil {
            describeObject(obj: any, name: string): any;
        }

        // http://wiki.servicenow.com/index.php?title=JSValidator
        export interface IJSValidator {
            new (): IJSValidator;
            validate(): string;
        }

        export interface IRESTMessageV2 {
            new (): IRESTMessageV2;
            new (name: string, methodName: string): IRESTMessageV2;
            execute(): IRESTResponseV2;
            executeAsync(): IRESTResponseV2;
            setHttpMethod(method: string): void;
            setHttpTimeout(timeoutMs: number): void;
            setBasicAuth(userName: string, userPass: string): void;
            setMutualAuth(profileName: string): void;
            setEccCorrelator(correlator: string): void;
            setEccParameter(name: string, value: string): void;
            setEndpoint(endpoint: string): void;
            setMIDServer(midServer: string): void;
            setRequestBody(body: string): void;
            setRequestHeader(name: string, value: string): void;
            setStringParameter(name: string, value: string): void;
            setStringParameterNoEscape(name: string, value: string): void;
            setQueryParameter(name: string, value: string): void;
            getRequestBody(): string;
            getEndpoint(): string;
            getRequestHeader(headerName: string): string;
            getRequestHeaders(): Object;
        }

        export interface IRESTResponseV2 {
            waitForResponse(timeoutSecs: number): void;
            getStatusCode(): number;
            getHeader(name: string): string;
            getHeaders(): Object;
            getBody(): string;
            haveError(): boolean;
            getErrorCode(): number;
            getErrorMessage(): string;
            getQueryString(): string;
        }

        export interface IRP {
            getReferringURL(): string;
            isDialog(): boolean;
            isHomePage(): boolean;
            isPrint(): boolean;
            isMobile(): boolean;
            getParameterValue(value: string): string;
            getParameters(): Array<string>;
            getViewID(): string;
        }

        export interface ISN_WS {
            RESTMessageV2: sn.Server.IRESTMessageV2;
            SOAPMessageV2: sn.Server.ISOAPMessageV2;
        }

        export interface ISOAPMessageV2 {
            new (): ISOAPMessageV2;
            new (soapMessage: string, soapFunction: string): ISOAPMessageV2;
            execute(): ISOAPResponseV2;
            executeAsync(): ISOAPResponseV2;
            setHttpMethod(method: string): void;
            setHttpTimeout(timeoutMs: number): void;
            setBasicAuth(userName: string, userPass: string): void;
            setMutualAuth(profileName: string): void;
            setEccCorrelator(correlator: string): void;
            setEccParameter(name: string, value: string): void;
            setEndpoint(endpoint: string): void;
            setMIDServer(midServer: string): void;
            setRequestBody(body: string): void;
            setRequestHeader(name: string, value: string): void;
            setStringParameter(name: string, value: string): void;
            setStringParameterNoEscape(name: string, value: string): void;
            setWSSecurity(keystoreId: string, keystoreAlias: string, keystorePassword: string, certificateId: string): void;
            getRequestBody(): string;
            getEndpoint(): string;
            getRequestHeader(headerName: string): string;
            getRequestHeaders(): Object;
        }

        export interface ISOAPResponseV2 {
            waitForResponse(timeoutSecs: number): void;
            getStatusCode(): number;
            getHeader(name: string): string;
            getHeaders(): Object;
            getBody(): string;
            haveError(): boolean;
            getErrorCode(): number;
            getErrorMessage(): string;
        }

        // http://wiki.servicenow.com/index.php?title=TableUtils
        export interface ITableUtils {
            new (tableName: string): ITableUtils;
            initialize(tableName: string): void;
            tableExists(): boolean;
            drop(tableName: string): void;
            dropAndClean(tableName: string): void;
            dropTableAndExtensions(tableName: string): void;
            getTables(): Array<any>;
            getTableExtensions(): Array<any>;
            getAllExtensions(): Array<any>;
            getAbsoluteBase(): string;
            getHierarchy(): Array<any>;
            hasExtensions(): boolean;
            isBaseClass(): boolean;
            isSoloClass(): boolean;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_XMLDocument2_API_Reference
        export interface IXMLDocument2 {
            new (): IXMLDocument2;
            parseXML(xmlDoc: string): void;
            getNodeText(xpath: string): string;
            getNode(xpath: string): IXMLNode;
            getFirstNode(xpath: string): IXMLNode;
            getNextNode(prev: Object): IXMLNode;
            createElement(name: string): IXMLNode;
            createElementWithTextValue(name: string, value: string): IXMLNode;
            setCurrentElement(element: IXMLNode): void;
            getDocumentElement(): IXMLNode;
            toString(): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_XMLNode_API_Reference
        export interface IXMLNode {
            getLastChild(): IXMLNode;
            getFirstChild(): IXMLNode;
            getNodeValue(): string;
            getNodeName(): string;
            hasAttribute(name: string): boolean;
            getAttribute(attribute: string): string;
            getChildNodeIterator(): IXMLNodeIterator;
            toString(): string;
        }

        // http://wiki.servicenow.com/index.php?title=Scoped_XMLNodeIterator_API_Reference
        export interface IXMLNodeIterator {
            hasNext(): Boolean;
            next(): IXMLNode;
        }
		        
        //https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/app-store/dev_portal/API_reference/ScriptableServiceRequest/concept/c_ScriptableServiceRequest.html
        export interface IRESTAPIRequest<T> {
            body: IRESTAPIRequestBody<T>;
            pathParams: any;
            queryParams: any;
            uri: string;
            url: string;
            headers: any;
            getHeader(header: string): string;
            getSupportedResponseContentTypes(): Array<string>;
        }
        
        //https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/app-store/dev_portal/API_reference/ScriptableServiceRequestBody/concept/c_ScriptableServiceRequestBody.html
        export interface IRESTAPIRequestBody<T> {
            data: T;
            dataStream: any;
            dataString: string;
            hasNext(): boolean;
            nextEntry(): any;
        }
        
        //https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/app-store/dev_portal/API_reference/ScriptableServiceResponseBuilder/concept/c_ScriptableServiceResponseBuilder.html
        export interface IRESTAPIResponse {
            getStreamWriter(): IRESTAPIResponseStream;
            setBody(body: any): void;
            setHeaders(headers: any): void;
            setLocation(location: string): void;
            setStatus(status: number): void;
            setHeader(header: string, value: string): void;
            setContentType(contentType: string): void;
            setError(error: any): void;
        }
        
        //https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/app-store/dev_portal/API_reference/ScriptableServiceResponseStreamWriter/concept/c_ScriptableServiceRespStreamWriter.html
        export interface IRESTAPIResponseStream {
            writeStream(stream: Object);
            writeString(data: string);
        }
    }
}
