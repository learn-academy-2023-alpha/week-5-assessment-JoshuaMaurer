# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
letter_c = 'c'

# input: an array of words and a single letter

# output: an array of all the words containing that particular letter

# psuedo:
# Create a method called return_words_only_include_letter and pass the array of strings and the single letter. using .select, pass each array through using PIPES! and use .include? and then the single letter. This will check if values of the array contain the single letter. .select will then natively return a new array with only the values that contain the single letter that was used.


def return_words_only_include_letter (array, letter)
    array.select {|value| value.include?(letter)} 
end

p return_words_only_include_letter(beverages_array, letter_o)
p return_words_only_include_letter(beverages_array, letter_t)
p return_words_only_include_letter(beverages_array, letter_c)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# input: a hash

# output: one array with all the hash values at their own index and in alphabetical order

# psuedo:
# Create a method called sort_that_hash and pass the given hash through as the parameter. Use .values which will return a new array containing only the values of the hash. add .flatten which then also returns a new array but a one-dimensional array with all the values in a single array. Since the values had previously been removed from the hash and placed into a new array, there is no need to go to a deeper level of recursion to flatten this array. Then add .sort to natively to sort alphabetically and in ascending order.  

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def sort_that_hash (hash)
    hash.values.flatten.sort
end

p sort_that_hash(us_states)




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# input: 
# Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method.

# output:
# return a sentence with all the data from the bike object.

# psuedo:
# Create a class called Bike
# Use the initialize method, only pass the model through since the wheels and current_speed have static values of 2 and 0.
# Create the bike_info method and implicitly return "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
# initialize trek = Bike.new('Trek')
# Then p (print) trek.bike_info


class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end
end

trek = Bike.new('Trek')
p trek.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end

    def pedal_faster(speed)
        @current_speed += speed
        @current_speed
    end
    
    def brake(speed)
        if @current_speed > speed
            @current_speed -= speed
        else
            @current_speed = 0
        end
    end
end

trek = Bike.new('Trek')
giant = Bike.new('Giant')
pinarello = Bike.new('Pinarello')

p trek.bike_info
trek.pedal_faster(10)
trek.pedal_faster(18)
trek.brake(5)
p trek.bike_info

p giant.bike_info
giant.pedal_faster(28)
giant.brake(25)
giant.brake(10)
p giant.bike_info

p pinarello.bike_info
pinarello.pedal_faster(47)
pinarello.brake(22)
p pinarello.bike_info

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

