function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalQuantity = quantity * pricePerDroid;
    if (totalQuantity > customerCredits) {
        return 'Insufficient funds!';
    } else {
        return 'You ordered ${quantity} droids worth ${totalPrice} credits!';
    }
}