import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://xchptykocrbsgrcpzbng.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjaHB0eWtvY3Jic2dyY3B6Ym5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNjgyMzAsImV4cCI6MjAzMjY0NDIzMH0.dQgocSoq4w9gGQMOFg-QegT8OUTwjLEJiKCogPGSVyk';
const supabase = createClient(supabaseUrl, supabaseKey);

const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', async () => {
    const formData = {
        name_kid: document.getElementById('name_kid').value,
        phone_kid: document.getElementById('phone_kid').value,
        grade: document.getElementById('grade').value,
        enter_point: document.getElementById('enter_point').value,
    };

    const nameParent1 = document.getElementById('name_parent1').value;
    const phoneParent1 = document.getElementById('phone_parent1').value;

    if (nameParent1) {
        formData.name_parent1 = nameParent1;
    }

    if (phoneParent1) {
        formData.phone_parent1 = phoneParent1;
    }

    const { data, error } = await supabase.from('DOD_REG').insert([formData]);
    if (error) {
        console.error('Error inserting data:', error.message);
        alert('Ошибка!');
    } else {
        console.log('Data inserted successfully:', data);
        alert('Форма отправлена!');
    }
});
