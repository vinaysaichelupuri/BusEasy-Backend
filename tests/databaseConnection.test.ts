import { Sequelize } from 'sequelize';

jest.mock('sequelize');

const mockAuthenticate = jest.fn();
Sequelize.prototype.authenticate = mockAuthenticate;

describe("Database Connection Mocking", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("should connect to the database successfully", async () => {
        mockAuthenticate.mockResolvedValueOnce("Connection successful");

        const sequelize = new Sequelize({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'vinaysai',
            password: '9700',
            database: 'buseasy',
        });

        await expect(sequelize.authenticate()).resolves.toBe("Connection successful");
        expect(mockAuthenticate).toHaveBeenCalled();
    });

    test("should fail to connect to the database", async () => {
        mockAuthenticate.mockRejectedValueOnce(new Error("Connection failed"));

        const sequelize = new Sequelize({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'vinaysai',
            password: '9700',
            database: 'buseasy',
        });

        await expect(sequelize.authenticate()).rejects.toThrow("Connection failed");
        expect(mockAuthenticate).toHaveBeenCalled();
    });
});

