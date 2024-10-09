get_params = (nextContinuationToken.length > 0) ?
	{
		ServiceCode: "AmazonEC2",
		MaxResults: 100,
		FormatVersion: "aws_v1",
		Filters: [
			{
				Field: 'regionCode',
				Type: 'TERM_MATCH',
				Value: location
			},
			{
				Field: 'preInstalledSw',
				Type: 'TERM_MATCH',
				Value: 'NA'
			},
			{
				Field: 'tenancy',
				Type: 'TERM_MATCH',
				Value: 'Shared'
			},
		],
		NextToken: nextContinuationToken
	} :
	{
		ServiceCode: "AmazonEC2",
		MaxResults: 100,
		FormatVersion: "aws_v1",
		Filters: [
			{
				Field: 'regionCode',
				Type: 'TERM_MATCH',
				Value: location
			},
			{
				Field: 'preInstalledSw',
				Type: 'TERM_MATCH',
				Value: 'NA'
			},
			{
				Field: 'tenancy',
				Type: 'TERM_MATCH',
				Value: 'Shared'
			},
		],
	};

const client = new PricingClient({ region: "us-east-1", credentials: this.awsCredentials });
const command = new GetProductsCommand(params);
let resp: GetProductsCommandOutput;
try {
	resp = await client.send(command);
} catch (error) {
	if (error.name === AwsException.INVALID_CLIENT_TOKEN_ID_EXCEPTION) {
		this.logger.error(`Invalid access key Id. tenantId=${this.tenantId}, externalId=${this.externalId}`, error);
	} else if (error.name === AwsException.UNRECOGNIZED_CLIENT_EXCEPTION) {
		this.logger.error(`Invalid access key Id or Secret Key. tenantId=${this.tenantId}, externalId=${this.externalId}`, error);
	} else if (error.name === AwsException.THROTTLING_EXCEPTION) {
		this.logger.error(`Request was denied due to request throttling. tenantId=${this.tenantId}, externalId=${this.externalId}`, error);
	} else {
		this.logger.error(`Error while executing ec2 command at getInstancesPricing. tenantId=${this.tenantId}, externalId=${this.externalId}, subscriptionId=${this.subscriptionId}, command=GetProductsCommand, params=${JSON.stringify(params)}`, error);
	}
	throw error;
}