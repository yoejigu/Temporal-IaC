import * as pulumi from "@pulumi/pulumi";
import { RdsDatabase } from "./rdsComponent";

const config = new pulumi.Config()

const rdsDb = new RdsDatabase("my-db", {
    allocatedStorage: Number(process.env.RDS_ALLOCATEDSTORAGE) ?? 20,
    maxAllocatedStorage: 0,
    dbName: "testdb",
    username: "yteDemoAdmin",
    password: "t3stpwdforD3mo",
    publiclyAccessible: true,
    identifier: "temporaldemodb"
});


export const rdsAddress = rdsDb.RdsAddress; 