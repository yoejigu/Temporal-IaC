import * as pulumi from "@pulumi/pulumi";
import { RdsDatabase } from "./rdsComponent";

const config = new pulumi.Config()
//let rdsAllocatedStorage = config.getNumber("rdsAllocatedStorage") || 20
console.log(process.env.RDS_ALLOCATEDSTORAGE);
const rdsDb = new RdsDatabase("my-db", {
    allocatedStorage: Number(process.env.RDS_ALLOCATEDSTORAGE) ?? 20,
    engine: "mysql",
    maxAllocatedStorage: 0,
    dbName: "testdb",
    username: "yteDemoAdmin",
    password: "t3stpwdforD3mo",
    publiclyAccessible: true,
    identifier: "temporaldemodbresize"
});


export const rdsAddress = rdsDb.RdsAddress; 
