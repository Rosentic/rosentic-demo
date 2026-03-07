interface Order {
    orderId: string;
    userId: string;
    productId: string;
    status: string;
}

export function createOrder(userId: string, productId: string): Promise<Order> {
    return fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId }),
    }).then((res) => res.json());
}
