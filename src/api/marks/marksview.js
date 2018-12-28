import mongoose from 'mongoose'
const marksViewSchema = new mongoose.Schema({
    studento: [],
    subjecto: [],
    mark: Number
});

marksViewSchema.methods = {
    view() {
        return {
            id: this._id,
            student: this.studento && this.studento.length > 0 ? { name: this.studento[0].name, id: this.studento[0]._id } : null,
            subject: this.subjecto && this.subjecto.length > 0 ? { name: this.subjecto[0].subject, id: this.subjecto[0]._id } : null,   
            mark: this.mark
        }
    }
}
const model = mongoose.model('Marksviews', marksViewSchema);

export default model;