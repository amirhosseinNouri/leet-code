package _6_power_of_three

import (
	"testing"
)

func TestPowerOfThree(t *testing.T) {
	r := isPowerOfThree(27)

	if !r {
		t.Errorf("expected the result to be %t, but got %t", true, r)
	}

}

func TestPowerOfThreeWithZero(t *testing.T) {
	r := isPowerOfThree(0)

	if r {
		t.Errorf("expected the result to be %t, but got %t", false, r)
	}
}

func TestPowerOfThreeWithNegativeNumber(t *testing.T) {
	r := isPowerOfThree(-1)

	if r {
		t.Errorf("expected the result to be %t, but got %t", false, r)
	}
}

func TestPowerOfThreeWithANumberWhichIsNotPowerOfThree(t *testing.T) {
	r := isPowerOfThree(28)

	if r {
		t.Errorf("expected the result to be %t, but got %t", true, r)
	}
}
