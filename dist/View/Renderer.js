


export class Renderer {
  constructor() {

  }
  renderData = async function(data) {
    let source = $('#handlebarsTemplate').html();
    let template = Handlebars.compile(source);
    const newHTML = template({ data });
    $('#container').empty().append(newHTML);
  }
}




