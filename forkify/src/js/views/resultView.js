import icons from "url:../../img/icons.svg"; /// parcel 2
import previewView from "./previewView.js";
import View from "./view";



class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errormessage =
    "No recipes found for your query!. Please try another again; ";
  _message = "";

    _generateMarkup() {
      return this._data
        .map((result) => previewView.render(result, false))
        .join("");
    }
}

export default new ResultsView();
