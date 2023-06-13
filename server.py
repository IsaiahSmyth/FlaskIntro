from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
@app.route('/play')
def hello():
    return render_template("play1.html", times = 5, color = 'red')


@app.route('/play/<int:x>')
def num(x):
    return render_template("play1.html", times = x, color = 'red')

@app.route('/play/<int:x>/<string:color>')
def num_color(x, color):
    return render_template("play1.html", times = x,  color = color)

if __name__=="__main__":
    app.run(debug=True, port = 5001)