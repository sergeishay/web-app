


export class Renderer {
  constructor() {

  }
  renderCity =async function(city) {
    let source = $('#handlebarsCity').html();
    let template = Handlebars.compile(source);
    const newHTML = template({ city });
    $('#cityContainer').empty().append(newHTML);
  }
  renderData = async function(data) {
    let source = $('#handlebarsTemplate').html();
    let template = Handlebars.compile(source);
    const newHTML = template({ data });
    $('#container').empty().append(newHTML);
  }
}




