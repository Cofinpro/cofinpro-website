class RichTextParserHelper {

    static splitTextWithBulletPoints(text) {
        var result = []
        if(text && text.length > 0) { 
            var temp = text.split("\n-");
            for (var i = 0; i < temp.length; i++) {
                if(temp[i].trim().length > 0) {
                    var cleanedText = temp[i].charAt(0) === '-' ? temp[i].substring(1, temp[i].length) : temp[i];
                    result.push(cleanedText);
                }
            }
        }
        return result; 
    }

    static removeLineBreaks(text) {
        return text.replace(/(\r\n|\n|\r)/gm, "");
    }

}

export default RichTextParserHelper