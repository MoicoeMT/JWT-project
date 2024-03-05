"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/login', methods=['POST'])
def login():
    body=request.json
    email=body.get('email', None)
    password=body.get('password', None)
    if email is None or password is None:
        return jsonify({'error': 'email and password is required', "ok": False}),400
    
    user=User.query.filter_by(email=email).one_or_none()
    if user is None:
        return jsonify({'error': 'email does not exist', "ok": False}),404
    pass_match=check_password_hash(user.password,password)
    if not pass_match:
        return jsonify({'error': 'invalid password', "ok": False}),401
    
    auth_token=create_access_token({'email': user.email, 'id': user.id})
    return jsonify({'token': auth_token, "ok": True}),200

@api.route('/register', methods=['POST'])
def user_registration():
    body=request.json
    email=body.get('email', None)
    password=body.get('password', None)
    name=body.get('name', None)
    if email is None or password is None:
        return jsonify({'error': 'email and password is required', "ok": False}),400
    
    password_hash=generate_password_hash(password)
    new_user=User(name=name, email=email, password=password_hash, is_active=True)
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({'data': 'user created', "ok": True} ),201
    except Exception as error:
        print (error)
        db.session.rollback()
        return jsonify({'error': 'internal server error' , "ok": False}),500
    

@api.route('/users', methods=['GET'])
@jwt_required()
def get_users():
    users=User.query.all()
    return jsonify({'data': [user.serialize() for user in users], "ok": True}),200




