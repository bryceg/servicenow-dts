servicenow-dts
==============

TypeScript Definitions for Service Now's APIs 

Nuget Packages
--------------
* Server: https://www.nuget.org/packages/servicenow.server.TypeScript
* Client: https://www.nuget.org/packages/servicenow.client.Typescript
 

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
