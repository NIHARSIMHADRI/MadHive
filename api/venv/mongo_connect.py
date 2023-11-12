from dotenv import load_dotenv, find_dotenv
import os
import pprint
from pymongo import MongoClient

load_dotenv(find_dotenv())

password = os.environ.get("MONGODB_PWD")

connection_string = f"mongodb+srv://MadHive:{password}@cluster0.9f25bc6.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(connection_string)

dbs = client.list_database_names()
madhives_db = client.madhives
madhives_collections = madhives_db.list_collection_names()
print(madhives_collections)

# feed in courses and network as key value pair
def create_student(name, email, courses, network):

    student_collection = madhives_db.student

    # courses_objs = []
    
    # for course in courses:
    #     course_doc = {
    #         "code": course['code'],
    #         "name": course['name'],
    #         "professor": course['professor'],
    #         "priority": course["priority"],
    #         "grade": None,
    #         "rate": None 
    #     }

    #     course_objs.append(course_doc)

    # student_doc = {
    #     "name": name,
    #     "email": email,
    #     "courses": courses,
    #     "network": network
    # }

    student_collection.insert_one(student_doc)

# feed in courses and network as key value pair
def create_tutor(name, email, courses, students):

    tutor_collection = madhives_db.tutor

    # courses_objs = []
    
    # for course in courses:
    #     course_doc = {
    #         "code": course['code'],
    #         "name": course['name'],
    #         "professor": course['professor'],
    #         "priority": course["priority"],
    #         "grade": None,
    #         "rate": None 
    #     }

    #     course_objs.append(course_doc)

    # tutor_doc = {
    #     "name": name,
    #     "email": email,
    #     "courses": courses,
    #     "students": students
    # }

    tutor_collection.insert_one(tutor_doc)

create_student("Nihar", "nsim@gmail.com", [{"code": "CS220", "priority": 2}, {"code": "CS320", "priority": 2}], [])
#create_student("Jpop", "jpop@gmail.com", [{"code": "CS220", "priority": 2}, {"code": "CS320", "priority": 2}], [{}])

