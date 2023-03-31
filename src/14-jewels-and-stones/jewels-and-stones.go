package main

import (
	"strings"
)

func numJewelsInStones(jewels string, stones string) int {
	stonesSlice := strings.Split(stones, "")

	var total int

	for _, s := range stonesSlice {
		if strings.Contains(jewels, s) {
			total++
		}
	}

	return total
}
