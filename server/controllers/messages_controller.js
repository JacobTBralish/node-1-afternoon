let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        let newMessage={
            id: id,
            text: text,
            time: time
        }
        id++
        messages.push(newMessage)
        res.status(200).json(messages)
    },

    read: (req, res) => {
        res.status(200).json(messages)
    },

    update: (req, res) => {
        let { text } = req.body;
        let { id } = req.params;
        let index = messages.findIndex(message => message.id == id);

        if (index != -1){
         messages[index].text = text;
         res.status(200).json(messages)
        }else {
            res.status(400).json('There is no message to update');
        }
        
    },

    delete: (req, res) => {
        let { id } = req.params;
        let index = messages.findIndex(message => message.id == id);

        if (index != -1){
         messages.splice(index, 1)
         res.status(200).json(messages)
        }else {
            res.status(400).json('There is no message to delete');
        }

    }

}