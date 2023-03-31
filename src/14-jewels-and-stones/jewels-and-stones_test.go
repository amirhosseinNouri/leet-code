package main

import "testing"

func TestStonesWithSomeJewels(t *testing.T) {
	jewels := numJewelsInStones("aA", "aAAbbbb")

	if jewels != 3 {
		t.Errorf("expected to have %d jewles, but got %d.", 3, jewels)
	}

}

func TestStonesWithNoJewels(t *testing.T) {
	jewels := numJewelsInStones("z", "ZZ")

	if jewels != 0 {
		t.Errorf("expected to have %d jewles, but got %d.", 0, jewels)
	}
}
