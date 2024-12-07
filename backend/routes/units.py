from flask import Blueprint, request, jsonify
from extensions import db  # Import db from extensions
from models import Unit

units_bp = Blueprint('units', __name__)

@units_bp.route('/api/units', methods=['GET'])
def get_units():
    units = Unit.query.all()
    return jsonify([{'id': unit.id, 'name': unit.name} for unit in units])

@units_bp.route('/api/units', methods=['POST'])
def create_unit():
    data = request.json
    if 'name' not in data:
        return {"error": "Unit name is required"}, 400
    unit = Unit(name=data['name'])
    db.session.add(unit)
    db.session.commit()
    return jsonify({'id': unit.id, 'name': unit.name}), 201

@units_bp.route('/api/units/<int:id>', methods=['PUT'])
def update_unit(id):
    unit = Unit.query.get_or_404(id)
    data = request.json
    unit.name = data.get('name', unit.name)
    db.session.commit()
    return jsonify({'id': unit.id, 'name': unit.name})