﻿using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    public class ComicDTO : Comic
    {
        public List<Chapter> Chapters { get; set; }
    }
}
