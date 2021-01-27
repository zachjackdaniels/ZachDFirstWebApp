using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ZachDFirstWebApp.Models
{
    public class GradeCalculator
    {
        [Required(ErrorMessage = "Grade must be between 0 and 100")]
        [Range(typeof(int), "0", "100")]
        public int assignments { get; set; }

        [Required(ErrorMessage = "Grade must be between 0 and 100")]
        [Range(typeof(int), "0", "100")]
        public int groupP { get; set; }

        [Required(ErrorMessage = "Grade must be between 0 and 100")]
        [Range(typeof(int), "0", "100")]
        public int quizzes { get; set; }

        [Required(ErrorMessage = "Grade must be between 0 and 100")]
        [Range(typeof(int), "0", "100")]
        public int exams { get; set; }

        [Required(ErrorMessage = "Grade must be between 0 and 100")]
        [Range(typeof(int), "0", "100")]
        public int intex { get; set; }


    }
}
