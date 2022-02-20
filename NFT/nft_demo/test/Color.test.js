const { assert } = require('chai');

const Color = artifacts.require('Color');

require('chai').use(require('chai-as-promised')).should();

contract('Color', (accounts) => {

    let color;

    before( async () => {
        color = await Color.deployed();
    })

    describe("Deploy", () => {
        it('Should Deploy', async () => {
            const address = await color.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
        })
    })

    describe('Mint', () => {
        it('Should Mint', async () => {
            const result = await color.mint("#ffffff");
            const colorCount = await color.totalSupply();
            assert.equal(colorCount, 1);
            const event = result.logs[0].args;
            assert.equal(event.tokenId.toNumber(), 1);
            assert.equal(event.to, accounts[0]);
            assert.equal(event.from, 0x0);

            await color.mint("#ffffff").should.be.rejected;
            await color.mint("#ffffff").should.be.rejected;
        })
    })

    describe("Indexing", () => {
        it("Mint colors", async() => {
            await color.mint("#ffddff");
            await color.mint("#ffeeff");
            await color.mint("#ffdddd");

            const colorCount = await color.totalSupply();

            assert.equal(colorCount, 4);

            let response = [];
            let data;
            for(let i = 1; i < colorCount; i++){
                 data = await color.getColor(i);
                response.push(data);
            }

            const expected = ["#ffddff", "#ffeeff", "#ffdddd"];

            assert.equal(response.join(','), expected.join(','));
        })
    })
})