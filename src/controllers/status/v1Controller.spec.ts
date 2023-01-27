import * as chai from "chai";
import superagent from "superagent";
import { config } from "../../config/config";

describe("Status V1", () => {
    it("Get Status", async () => {
        const res = await superagent.get(
            `http://127.0.0.1:${config.port}/v1/status`
        );
        chai.expect(res.status).to.eql(200);
    });
});
