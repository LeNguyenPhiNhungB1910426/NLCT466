const {ObjectId} = require("mongodb");

class ContactService {
    constructor(client) {
        this.Contact = client.db().collection("congvan");
    }

    extractConactData(payload){
        const contact = {
            SoCongVan: payload.SoCongVan,
            TenCongVan: payload.TenCongVan,
            LoaiCongVan: payload.LoaiCongVan,
            DonViGui: payload.DonViGui,
            NguoiGui: payload.NguoiGui,
            NgayNhan: new Date(),
            File: payload.File
        };

        Object.keys(contact).forEach(
            (key) => contact[key] === undefined && delete contact[key]
        );
        return contact;
    }

    async create(file,payload) {
        const contact = this.extractConactData({...payload,File:file.name});
        console.log(contact);
        const fs = require('fs');
        let folderPath = "./Upload/"+contact.SoCongVan;
        try {
            if (!fs.existsSync("./Upload")) {
                fs.mkdirSync("./Upload");
            }
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
            
        } catch (err) {
            console.error(err);
        }
        file.mv(`${folderPath}/${file.name}`, function (err) {
            if (err) {
                console.log(err)
                return res.status(500).send({ msg: "Error occured" });
            }
        });

        const result = await this.Contact.insertOne(
            contact
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Contact.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
        name: { $regex: new RegExp(name), $options: "i" },
        });
    }

    async findById(id) {
        return await this.Contact.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractConactData(payload);
        const result = await this.Contact.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Contact.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }

    async findFavorite() {
        return await this.find({ favorite: true });
    }

    async deleteAll() {
        const result = await this.Contact.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = ContactService; 