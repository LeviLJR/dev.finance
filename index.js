const App = {
    init() {
        if (Transaction.all.length) {
            Transaction.all.forEach(DOM.addTransaction)
        }

        DOM.updateBalance()

        Storage.set(Transaction.all)
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}
App.init()