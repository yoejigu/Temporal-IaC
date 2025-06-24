import * as pulumi from "@pulumi/pulumi";
import * as port from "@port-labs/port";


const rds = new port.Blueprint("rds",{
    identifier: "mysql-rds",
    title: "MySQL RDS",
    properties:{
        stringProps: {
            engine: {
              title: "DB Engine",
              required: false,
            },
            instanceClass: {
                title: "Instance Class",
                required: false,
            },
            username: {
                title: "DB Username",
                required: true,
            },
            password: {
                title: "DB Password",
                required: true,
            },
            dbName: {
                title: "DB Name",
                required: true,
            },
            identifier: {
                title: "AWS DB Display Name",
                required: false,
            },
    
        },
        booleanProps:{
            applyImmediately: {
                title: "Apply changes to DB Immedietly",
                required: false,
            },
            publiclyAccessible: {
                title: "Publicly Accessible?",
                required: false,
            },
        },
        numberProps:{
            allocatedStorage:{
                title: "Allocated Storage",
                required: true,
            },
            maxAllocatedStorage:{
                title: "Maximum Allocated Storage",
                required: false,
            }
        }
    }

});