package main

import "testing"

func TestIsPrefixStringWhenItsPrefix(t *testing.T) {
	isPrefix := isPrefixString("iloveleetcode", []string{"i", "love", "leetcode", "apples"})

	if !isPrefix {
		t.Errorf("expected the result to be %t, but got %t", true, isPrefix)
	}
}

func TestIsPrefixStringWhenItsNotPrefix(t *testing.T) {
	isPrefix := isPrefixString("iloveleetcode", []string{"apples", "i", "love", "leetcode"})

	if isPrefix {
		t.Errorf("expected the result to be %t, but got %t", false, isPrefix)
	}
}

func TestIsPrefixStringWhenWordsAreLonger(t *testing.T) {
	isPrefix := isPrefixString("a", []string{"aa", "aaaa", "banana"})

	if isPrefix {
		t.Errorf("expected the result to be %t, but got %t", false, isPrefix)

	}
}

func TestIsPrefixStringWhenSIsLonger(t *testing.T) {
	isPrefix := isPrefixString("cccccccccc", []string{"c", "cc"})

	if isPrefix {
		t.Errorf("expected the result to be %t, but got %t", false, isPrefix)

	}
}
