var gradebook = 
{   
    _grades: [],
    addGrade: function(newGrade)
    {
        this._grades.push(newGrade);
    },
    getCountOfGrades: function()
    {
        return this._grades.length;
    },
    getAverage: function()
    {
        var total = 0;
            for(var i=0;i<this._grades.length;i++)
            {
                total += this._grades[i];
            }    
            return  total/this._grades.length;
        
    },
    reset: function() {
        this._grades = [];
    },
    getLetterGrade: function()
    {
        if(this.getAverage() >= 90)
        {
            return "A";
        }
        else if (this.getAverage() >= 80)
        {
            return "B";
        }
        else if (this.getAverage() >= 70)
        {
            return "C";
        }
        else if (this.getAverage() >= 60)
        {
            return "D";
        }
        else 
        {
            return "F";
        }
    
    }
    
};

exports.book = gradebook;