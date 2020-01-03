from django.db import models


class Test(models.Model):
    test_name = models.CharField('Test', max_length=100, unique=True)
    test_description = models.TextField("Description")
    test_slug = models.SlugField()
    difficulty = models.ForeignKey('Difficulty', on_delete=models.SET_NULL, null=True, related_name='test')


    # @property
    # def get_topics(self):
    #     return self.topics.all()

    def __str__(self):
        return self.test_name

class Topic(models.Model):
    topic_name = models.CharField('Topic', max_length=100)
    topic_slug = models.SlugField()
    test = models.ManyToManyField('Test', related_name='topics', blank=True)

    def __str__(self):
        return self.topic_name

class Difficulty(models.Model):
    difficulty = models.CharField(max_length=100)

    def __str__(self):
        return self.difficulty

class Question(models.Model):
    question = models.TextField()
    test = models.ManyToManyField('Test', 'questions')

    def __str__(self):
        return self.question

class Awnser(models.Model):
    awnser = models.CharField(max_length=1000)
    question = models.ForeignKey('Question', on_delete=models.CASCADE, related_name='awnsers')
    correct = models.BooleanField()

    def __str__(self):
        return self.awnser