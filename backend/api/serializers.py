from rest_framework import serializers

from .models import *

class DifficaltySerializer(serializers.ModelSerializer):
    class Meta:
        model = Difficulty
        fields = ['difficulty']

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ['topic_name']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['question']
    
class TestSerializer(serializers.ModelSerializer):
    difficulty = DifficaltySerializer()
    topics = TopicSerializer(many=True)
    questions = QuestionSerializer(many=True)
    class Meta:
        model = Test
        fields = ['test_name', 'test_description', 'difficulty', 'topics', 'questions']


