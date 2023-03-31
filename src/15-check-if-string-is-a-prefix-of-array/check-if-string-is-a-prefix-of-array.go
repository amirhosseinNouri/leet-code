package main

func isPrefixString(s string, words []string) bool {

	var t string

	for i := 0; i < len(words); i++ {
		t += words[i]

		if len(t) < len(s) {
			continue
		}

		if len(t) > len(s) {
			break
		}

		return t == s
	}

	return false

}
