﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic
            var movies = _context.Movies;
            //return Ok(new string[] { "movie1 string", "movie2 string" });

            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            // return Ok(movie);
            var movies = _context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            return Ok(movies);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            // Create movie in db logic
          
            try
            {
                _context.Movies.Add(movie);
                _context.SaveChanges();
                return Created("api/Movie", movie);
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
        }

        // PUT api/movie
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Movie movie)
        {
            // Update movie in db logic
            try
            {
                movie.MovieId = id;
                _context.Movies.Update(movie);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            var movie = _context.Movies.Where(e => e.MovieId == id).FirstOrDefault();


            try
            {
                _context.Movies.Remove(movie);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
        }
    }
}