from fastapi import FastAPI

app = FastAPI()


def create_order(user_id, product_id):
    return {"order_id": "ord_123", "user_id": user_id, "product_id": product_id, "status": "created"}


@app.post("/order")
def order_endpoint(user_id: str, product_id: str):
    return create_order(user_id, product_id)
