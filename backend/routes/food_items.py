from flask import Blueprint, request, jsonify
from extensions import db
from models import FoodItem, Unit  # Import Unit model

food_items_bp = Blueprint('food_items', __name__)

@food_items_bp.route('/api/food_items', methods=['GET'])
def get_food_items():
    food_items = FoodItem.query.all()
    return jsonify([{
        'id': item.id,
        'name': item.name,
        'unit_id': item.unit_id,
        'unit_name': item.unit.name
    } for item in food_items])

@food_items_bp.route('/api/food_items', methods=['POST'])
def create_food_item():
    data = request.json
    if 'name' not in data or 'unit_id' not in data:
        return {"error": "Name and Unit ID are required"}, 400
    unit = Unit.query.get_or_404(data['unit_id'])
    food_item = FoodItem(name=data['name'], unit=unit)
    db.session.add(food_item)
    db.session.commit()
    return jsonify({'id': food_item.id, 'name': food_item.name, 'unit_id': unit.id}), 201

@food_items_bp.route('/api/food_items/<int:id>', methods=['PUT'])
def update_food_item(id):
    food_item = FoodItem.query.get_or_404(id)
    data = request.json
    food_item.name = data.get('name', food_item.name)
    if 'unit_id' in data:
        food_item.unit_id = data['unit_id']
    db.session.commit()
    return jsonify({'id': food_item.id, 'name': food_item.name, 'unit_id': food_item.unit_id})

@food_items_bp.route('/api/food_items/<int:id>', methods=['DELETE'])
def delete_food_item(id):
    food_item = FoodItem.query.get_or_404(id)
    db.session.delete(food_item)
    db.session.commit()
    return '', 204
