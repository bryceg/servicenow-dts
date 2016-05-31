servicenow-dts
==============

TypeScript Definitions for Service Now's APIs.  This repository is structured into client and server side d.ts files, as well as release specific (Helsinki, Geneva, Fuji) as needed. 

Installation to your project
==============

Recommend using typings npm project to install type definitions https://github.com/typings/typings

Scoped Apps
---------------
Using typings  
- typings install github:bryceg/servicenow-dts/server/scoped-VERSION/servicenowserver.d.ts#1.0 --global


Global and Scoped ES3 Apps
---------------
For global or scoped apps prior to Helsinki that target ES3, add the rhino d.ts reference instead of using native lib.dts
- typings install github:bryceg/servicenow-dts/server/rhino-es3.d.ts#1.0 --global

Update your tsconfig to not use lib.d.ts when using es3 rhino
```javascript
{
	"compilerOptions": {
		"target": "es3",
		"noLib": true
	}
}
```

Recommend
-------------
In your project add a d.ts for your own service now types that you will be using, and extend the IGlideServerRecord with your type information using overload constants.

```typescript
declare module sn {
    export module Server {
        export interface IGlideServerRecord {
            new (type: 'sys_user'): sn.Types.IUser;
        }
    }

    export module Types {
        export interface IUser extends sn.Server.IGlideServerRecord {
            sys_id: string;
            firstname: string;
            lastname: string;
            name: string;
            user_name: string;
            email: string;
            company: any;
            title: string;
            active: boolean;
            source: string;
        }
    }
  }
```

Then you can initialize your GlideRecord for sys_user and get property type information from IUser
```typescript
var users = new GlideRecord('sys_user');
```
