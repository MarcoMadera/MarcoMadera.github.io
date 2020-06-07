# Pandemias


```python
def display_board(hidden_word, tries):
    print(IMAGES[tries])
    print('')
    print(hidden_word)
    print('--- * --- * --- * --- * --- * --- ')

def run():
    word = nouns.random_()
    hidden_word = ['-'] * len(word)
    tries = 0

    while True:
        display_board(hidden_word, tries)
        current_letter = str(input('Try a letter: '))

        letter_indexes = []
        for i in range(len(word)):
          if word[i] == current_letter:
            letter_indexes.append(i)

        if len(letter_indexes) == 0:
          tries +=1

          if tries == 7:
            display_board(hidden_word, tries)
            print('')
            print('You lost! The word was {}'.format(word))
            break
        else:
          for i in letter_indexes:
            hidden_word[i] = current_letter

          letter_indexes = []

        try:
          hidden_word.index('-')
        except ValueError:
          print('')
          print('You win! The word was {}'.format(word))
          break
if __name__ == '__main__':
    print('H A N G M A N  G A M E')
    run() 
```