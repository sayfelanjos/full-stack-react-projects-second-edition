import userController from "../user.controller";
import config from "../../../config/config";
import mongoose from 'mongoose'

const mockRequest = (body) => (
	{
		body
	}
);

const mockResponse = () => {
	const res = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	return res;
};

describe('create user', () => {
	beforeAll(async () => {
		mongoose.Promise = global.Promise
		mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
		mongoose.connection.on('error', () => {
			throw new Error(`unable to connect to database: ${config.mongoUri}`)
		})
	});

	afterAll(async () => {
		await mongoose.connection.close();
	});
});