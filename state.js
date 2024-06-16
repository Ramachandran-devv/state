// Alter an object's behavior when its state changes
var Context = /** @class */ (function () {
    function Context(state) {
        this.transitionTo(state);
    }
    Context.prototype.transitionTo = function (state) {
        console.log("Context: Transition to ".concat(state.constructor.name, "."));
        this.state = state;
        this.state.setContext(this);
    };
    Context.prototype.click = function () {
        this.state.click(this);
    };
    Context.prototype.type = function (words) {
        this.state.type(this, words);
    };
    return Context;
}());
var EditingState = /** @class */ (function () {
    function EditingState() {
    }
    EditingState.prototype.setContext = function (context) {
        this.context = context;
    };
    EditingState.prototype.click = function (context) {
        console.log('EditingState: Click.');
        // Implement behavior specific to editing state when an element is clicked
    };
    EditingState.prototype.type = function (context, words) {
        console.log("EditingState: Typing - ".concat(words));
        // Implement behavior specific to editing state for typing
    };
    return EditingState;
}());
var ReadOnlyState = /** @class */ (function () {
    function ReadOnlyState() {
    }
    ReadOnlyState.prototype.setContext = function (context) {
        this.context = context;
    };
    ReadOnlyState.prototype.click = function (context) {
        console.log('ReadOnlyState: Click. Nothing happens because read-only.');
        // Implement behavior specific to read-only state when an element is clicked
    };
    ReadOnlyState.prototype.type = function (context, words) {
        console.log('ReadOnlyState: Trying to type in read-only mode. Access denied.');
        // Implement behavior specific to read-only state for typing
    };
    return ReadOnlyState;
}());
// Client code
var editor = new Context(new ReadOnlyState());
editor.click();
editor.type("Hello, world!");
editor.transitionTo(new EditingState());
editor.click();
editor.type("Hello, world!");
//# sourceMappingURL=state.js.map