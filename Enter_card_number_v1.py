import getpass

account_number = getpass.getpass("Hello! Please, enter your card number: ")
account_number_to_array = [int(i) for i in account_number]

for x in range(len(account_number_to_array)):
    if account_number_to_array.index(account_number_to_array[x]) < len(account_number_to_array) - 4:
        account_number_to_array[x] = "*"

array_to_string = "".join(str(e) for e in account_number_to_array)

print("Please, confirm you card number by the last 4 numbers: " + array_to_string)

confirm_card_number = input("The card number is right: Y/N ? ")

def fconfirm_card_number():
    if confirm_card_number == "Y":
        print("Your card is accepted!")
    else:
        print("The card is declined! Please, launch a console again and enter a correct card number!")

fconfirm_card_number()
