import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export interface DataStackProps extends cdk.StackProps {
  stageName: string;
}

/**
 * Single-table layout (PK / SK). Entity key patterns:
 *
 * | Entity           | PK              | SK                    |
 * |------------------|-----------------|-----------------------|
 * | User profile     | USER#<userId>   | PROFILE               |
 * | Program          | PROGRAM#<id>    | METADATA              |
 * | UserProgram      | USER#<userId>   | PROGRAM#<programId>   |
 * | UploadJob        | USER#<userId>   | UPLOAD#<jobId>        |
 * | Purchase         | USER#<userId>   | PURCHASE#<purchaseId> |
 * | MyListItem       | USER#<userId>   | MYLIST#<programId>    |
 * | PracticeProgress | USER#<userId>   | PROGRESS#<programId>  |
 */
export class DataStack extends cdk.Stack {
  readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string, props: DataStackProps) {
    super(scope, id, props);

    const prefix = `fingora-${props.stageName}`;

    this.table = new dynamodb.Table(this, "MainTable", {
      tableName: `${prefix}-main`,
      partitionKey: { name: "PK", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "SK", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: props.stageName === "prod",
      removalPolicy:
        props.stageName === "prod"
          ? cdk.RemovalPolicy.RETAIN
          : cdk.RemovalPolicy.DESTROY,
    });

    new cdk.CfnOutput(this, "MainTableName", {
      value: this.table.tableName,
      exportName: `${prefix}-main-table-name`,
    });

    new cdk.CfnOutput(this, "MainTableArn", {
      value: this.table.tableArn,
      exportName: `${prefix}-main-table-arn`,
    });
  }
}
