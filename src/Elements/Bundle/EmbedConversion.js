  function Convert(url){

    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return `//www.youtube.com/embed/${match[2]}`;
    } else {
        return 'error';
    }
  }

  export default Convert