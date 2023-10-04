import mongoose, { Mongoose } from "mongoose";;

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.SchemaTypes.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false });

const autor = mongoose.model("autpres", autorSchema);

export { autor, autorSchema };
