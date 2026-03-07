package payment

import "fmt"

func ProcessPayment(amount float64, accountID string) (string, error) {
	txnID := fmt.Sprintf("txn_%s_%.0f", accountID, amount)
	return txnID, nil
}
