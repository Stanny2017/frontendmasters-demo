function upper(strings, ...values) {
	var str = ''

	for (let i = 0; i < strings.length; i++) {
		if (i > 0) {
			str += values[i - 1].toUpperCase();
		}
		str += strings[i]
	}

	return str
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);

//  strings [hello,  [name](@,), welcome to ,[]!]      